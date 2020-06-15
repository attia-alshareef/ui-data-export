import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { AccordionSet } from '@folio/stripes/components';

import { withStripes } from '@folio/stripes-core';
import RunningJobs from './RunningJobs';

import css from './Jobs.css';

export const Jobs = withStripes(memo(({ stripes: { locale } }) => (
  <div
    data-test-jobs-container
    className={css.jobsContainer}
    key={locale}
  >
    <AccordionSet>
      <RunningJobs />
    </AccordionSet>
  </div>
)));
Jobs.propTypes = { stripes: PropTypes.object };
