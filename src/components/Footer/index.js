import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://yodub.com/" title="&copy;yodub" />
            &nbsp;
            {config.title}
            {new Date().getFullYear()}
            &nbsp;yodub
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
