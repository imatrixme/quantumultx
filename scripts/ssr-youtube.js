if ($request.url.indexOf('&oad') != -1) {
  $done({ response: { body: '' } });
} else if ($request.url.indexOf('&ctier') != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, 'ctier=A');
  $done({ response: { status: 404, headers: { Location: url } } });
} else {
  $done({});
}
