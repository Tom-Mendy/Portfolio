import { TransferState, makeStateKey } from '@angular/core';
import { ɵDomSanitizerImpl } from '@angular/platform-browser';
import { Response } from 'express';

const README_KEY = makeStateKey<string>('readmeContent');

export function GithubFetchPinnedRepos(response: any, res: Response): string {
  const transferState = new TransferState();
  const cachedContent = transferState.get<string>(README_KEY, '');
  const sanitizer = new ɵDomSanitizerImpl(document);

  if (cachedContent) {
    res.send(cachedContent);
    return cachedContent;
  }

  let readmeContent = '';

  fetch('https://raw.githubusercontent.com/Tom-Mendy/Tom-Mendy/main/README.md', {})
    .then((response) => response.json())
    .then((data) => {
      const content = sanitizer.bypassSecurityTrustHtml(data).toString();
      transferState.set(README_KEY, content);
      readmeContent = content;
      res.send(readmeContent);
    })
    .catch((error) => {
      res.status(500).send(error);
    });

  return readmeContent;
}
