import React from 'react';
import { storiesOf } from '@storybook/react';
import HorizontalTimeline from '../HorizontalTimeline';

const tests = [
  {
    describe: 'items',
    its: [
      {
        it: 'defaults',
        props: {
          items: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have custom width for items',
        props: {
          items: [
            { label: 'Instructions completed', width: '50px' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide', width: '5%' },
          ],
        },
      },
      {
        it: 'should have different icons and types for each item',
        props: {
          items: [
            {
              label: 'Instructions completed',
              type: 'active',
              icon: <HorizontalTimeline.CompleteIcon />,
            },
            {
              label: 'Domain check',
              type: 'active',
              icon: <HorizontalTimeline.ActiveIcon />,
            },
            {
              label: 'Domain connecting',
              icon: <HorizontalTimeline.UpcomingIcon />,
            },
            {
              label: 'Site is live worldwide',
              icon: <HorizontalTimeline.ErrorIcon />,
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${HorizontalTimeline.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <HorizontalTimeline {...props} />);
  });
});
