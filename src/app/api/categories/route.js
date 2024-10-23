import cos from '../../../../config'

//获取分类列表
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const params = {
    Bucket: process.env.COS_BUCKET,
    Region: process.env.COS_REGION,
    Prefix: category ? `${category}/` : '',
    Delimiter: '/'
  };

  try {
    const data = await cos.getBucket(params);
    const categories = data.CommonPrefixes;
    // 去掉每个 Prefix 最后的 '/'
    categories.forEach(category => {
      if (category.Prefix.endsWith('/')) {
        category.Prefix = category.Prefix.slice(0, -1);
      }
    });
    return Response.json(categories);
  } catch (err) {
    return Response.error(err);
  }

};
