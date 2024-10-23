export async function GET() {
  const data = { 'hello world': 'hello world' };
  return Response.json(data)
}