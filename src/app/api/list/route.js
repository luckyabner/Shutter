import cos from '../../../../config'

const listHandler = async (req, res) => {
  const params = {
    Bucket: process.env.COS_BUCKET,
    Region: process.env.COS_REGION,
  };

  try {
    const data = await cos.getBucket(params);
    const photos = data.Contents
      .filter((item) => item.Size !== '0')
      .map((item) => {
        return {
          name: item.Key,
          url: `https://${params.Bucket}.cos.${params.Region}.myqcloud.com/${item.Key}`,
          size: item.Size,
          time: item.LastModified,
        };
      });
    return new Response(JSON.stringify(photos), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

};

export { listHandler as GET };
