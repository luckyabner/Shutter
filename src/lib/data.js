import cos from '../../config';

export async function fetchPhotos({ category }) {
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
        const key = item.Key;
        const name = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
        const date = new Date(item.LastModified);
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        return {
          name: name,
          url: `https://${params.Bucket}.cos.${params.Region}.myqcloud.com/${item.Key}`,
          time: formattedDate,
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp); // 按时间戳排序，最新的在前面
    return photos;
  } catch (err) {
    throw new Error(err);
  }

};

//获取分类列表
export async function fetchCategories({ category }) {

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
    return categories;
  } catch (err) {
    throw new Error(err);
  }

};
