import cos from '../../../../config'

//获取图片列表
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const params = {
    Bucket: process.env.COS_BUCKET,
    Region: process.env.COS_REGION,
    Prefix: category ? `${category}/` : '',
  };

  try {
    const data = await cos.getBucket(params);
    const photos = data.Contents
      .filter((item) => item.Size !== '0')
      .map((item) => {
        return {
          name: item.Key,
          url: `https://${params.Bucket}.cos.${params.Region}.myqcloud.com/${item.Key}`,
          time: item.LastModified,
        };
      });
    return Response.json(photos);
  } catch (err) {
    return Response.error(err);
  }

};
