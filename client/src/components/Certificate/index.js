import React from 'react';
import moment from 'moment';
import CertificateHeaderContainer from './Header/Container';
import { Row, LineWrapper } from '../shared/Line';
import { CertLink } from './style';

const Certificate = ({ cert }) => (
  <LineWrapper>
    <CertificateHeaderContainer cert={cert} />
    <Row as="div">
      <CertLink as="a" href={cert.url} target="_blank" rel="noreferrer noopener">
        link to certification &rarr;
      </CertLink>
      <span>{moment(cert.issued).format('MMM DD YYYY')}</span>
    </Row>
  </LineWrapper>
);

export default Certificate;
