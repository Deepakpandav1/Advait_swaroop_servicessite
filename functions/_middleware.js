export function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // If the request is for a static asset (has an extension), serve it normally
  if (url.pathname.includes('.') && !url.pathname.endsWith('.html')) {
    return next();
  }
  
  // For all other requests (including routes like /education, /g2c, etc.), serve index.html
  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/index.html'
    }
  });
}
