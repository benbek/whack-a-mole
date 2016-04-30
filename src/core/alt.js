import Alt from 'alt';
let alt = new Alt();

// make sure alt-devtools only exists in
// non-production envs
if ('production' !== process.env.NODE_ENV) {
  Alt.debug('alt', alt);
}

export default alt;
