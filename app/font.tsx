/* 
Encountered bug where one would see (at minimum) a dozen yellow mild-errors 
attributed to a Link missing an 'as' attribute. Tracing the bug, it is due to how 
Next.js loads (and apparently preloads) Google fonts. 
Found temporary solution here: https://github.com/vercel/next.js/discussions/49607#discussioncomment-5962298 
for until Vercel properly fixes behavior. 
This fix is *NOT* critical but it makes debugging easier having those errors out of sight. 
Once Vercel fixes this behavior, move this script back into layout.tsx 
*/

import { Raleway } from "next/font/google";

export const raleway = Raleway({ subsets: ['latin'] });