const ipfsRegEx = /^(ipfs|ipns):\/\/(.*)$/i;

const IPFStransformer: TransformURI = (uri) => {
  const match = uri.match(ipfsRegEx);
  // likely http:// , https:// or // uri
  if (!match) return null;

  const [, protocol, hash] = match;
  if (!protocol || !hash) return null;

  // only append `/` to a bare root; a path segment (`.../logo.png`)
  // must keep its exact ending or gateways may resolve it differently
  const suffix = hash.includes('/') ? '' : '/';
  return `https://ipfs.io/${protocol}/${hash}${suffix}`;
};

// takes URI, returns string if applicable or null
type TransformURI = (uri: string) => string | null;

const createURItoHttpURLTransformer = (
  ...transformers: TransformURI[]
): ((uri: string) => string) => {
  return (uri) => {
    // try each transformer
    const httpURL = transformers.reduce<string | null>(
      (result, transformer) => {
        // as soon as transformer returns string, skip further transformers
        if (result !== null) return result;
        // no transformer returned string yet, so try current transformer
        return transformer(uri);
      },
      null
    );

    return httpURL || uri;
  };
};

// uri can be
// IPFS  ipfs://QmV8AfDE8GFSGQvt3vck8EwAzsPuNTmtP8VcQJE3qxRPaZ
// IPNS  ipns://app.uniswap.org
// http, https or // (match current protocol)

export const uriToHttpURL = createURItoHttpURLTransformer(IPFStransformer);
