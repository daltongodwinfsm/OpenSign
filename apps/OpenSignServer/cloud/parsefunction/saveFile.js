import uploadFileToS3 from './uploadFiletoS3.js';
import { parseJwt } from '../../Utils.js';
import jwt from 'jsonwebtoken';
export default async function saveFile(request) {
  const jwttoken = request.headers.jwttoken || '';

  if (!request.params.fileBase64) {
    throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Please provide file.');
  }
  const fileBase64 = request.params.fileBase64;
  const id = request.params.id;
  try {
    if (request.user) {
      const extCls = new Parse.Query('contracts_Users');
      extCls.equalTo('UserId', request.user);
      extCls.include('TenantId');
      const resExt = await extCls.first({ useMasterKey: true });
      if (resExt) {
        const _resExt = JSON.parse(JSON.stringify(resExt));
        const fileAdapters = _resExt?.TenantId.FileAdapters || [];
        const fileAdapter = fileAdapters?.find(x => x.id === id) || {};
        if (fileAdapter?.accessKeyId) {
          const adapterConfig = {
            id: id,
            fileAdapter: fileAdapter?.fileAdapter,
            bucketName: fileAdapter?.bucketName,
            region: fileAdapter?.region,
            endpoint: fileAdapter?.endpoint,
            accessKeyId: fileAdapter?.accessKeyId,
            secretAccessKey: fileAdapter?.secretAccessKey,
            baseUrl: fileAdapter?.baseUrl,
          };
          const buffer = Buffer.from(fileBase64, 'base64');
          const fileName = request.params.fileName;
          const ext = request.params.fileName?.split('.')?.pop();
          let mimeType;
          if (ext === 'pdf') {
            mimeType = 'application/pdf';
          } else if (ext === 'png' || ext === 'jpeg' || ext === 'jpg') {
            mimeType = `image/${ext}`;
          }
          try {
            const presignedUrl = await uploadFileToS3(buffer, fileName, mimeType, adapterConfig);
            return { url: presignedUrl };
          } catch (err) {
            console.error('Error generate presigned url:', err);
            const msg = 'Fileadapter credentials are invalid.';
            throw new Parse.Error(400, msg);
          }
        } else {
          const fileName = request.params.fileName;
          const pdfFile = new Parse.File(fileName, { base64: fileBase64 });
          // Save the Parse File if needed
          const pdfData = await pdfFile.save({ useMasterKey: true });
          const presignedUrl = pdfData.url();
          return { url: presignedUrl };
        }
      } else {
        throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'User not found.');
      }
    } else if (jwttoken) {
      const jwtDecode = parseJwt(jwttoken);
      const userCls = new Parse.Query(Parse.User);
      userCls.equalTo('email', jwtDecode?.user_email);
      const userRes = await userCls.first({ useMasterKey: true });
      const userId = userRes?.id;
      const tokenQuery = new Parse.Query('appToken');
      tokenQuery.equalTo('userId', {
        __type: 'Pointer',
        className: '_User',
        objectId: userId,
      });
      const appRes = await tokenQuery.first({ useMasterKey: true });
      const decoded = jwt.verify(jwttoken, appRes?.get('token'));
      if (decoded?.user_email) {
        const extCls = new Parse.Query('contracts_Users');
        extCls.equalTo('Email', decoded?.user_email);
        extCls.include('TenantId');
        const resExt = await extCls.first({ useMasterKey: true });
        if (resExt) {
          const _resExt = JSON.parse(JSON.stringify(resExt));
          const fileAdapters = _resExt?.TenantId.FileAdapters || [];
          const fileAdapter = fileAdapters?.find(x => x.id === id) || {};
          if (fileAdapter?.accessKeyId) {
            const adapterConfig = {
              id: id,
              fileAdapter: fileAdapter?.fileAdapter,
              bucketName: fileAdapter?.bucketName,
              region: fileAdapter?.region,
              endpoint: fileAdapter?.endpoint,
              accessKeyId: fileAdapter?.accessKeyId,
              secretAccessKey: fileAdapter?.secretAccessKey,
              baseUrl: fileAdapter?.baseUrl,
            };
            const buffer = Buffer.from(fileBase64, 'base64');
            const fileName = request.params.fileName;
            const ext = request.params.fileName?.split('.')?.pop();
            let mimeType;
            if (ext === 'pdf') {
              mimeType = 'application/pdf';
            } else if (ext === 'png' || ext === 'jpeg' || ext === 'jpg') {
              mimeType = `image/${ext}`;
            }
            try {
              const presignedUrl = await uploadFileToS3(buffer, fileName, mimeType, adapterConfig);
              return { url: presignedUrl };
            } catch (err) {
              console.error('Error generate presigned url:', err);
              const msg = 'Fileadapter credentials are invalid.';
              throw new Parse.Error(400, msg);
            }
          } else {
            const fileName = request.params.fileName;
            const pdfFile = new Parse.File(fileName, { base64: fileBase64 });
            // Save the Parse File if needed
            const pdfData = await pdfFile.save({ useMasterKey: true });
            const presignedUrl = pdfData.url();
            return { url: presignedUrl };
          }
        } else {
          throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'User not found.');
        }
      }
    } else {
      throw new Parse.Error(Parse.Error.INVALID_SESSION_TOKEN, 'User is not authenticated.');
    }
  } catch (err) {
    console.log('err in savetoS3', err);
    throw err;
  }
}
