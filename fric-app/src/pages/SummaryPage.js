/**
 * 
 */

import React from 'react';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import OverviewCards from '../components/summary/OverviewCards';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../components/general/ThemeColors';

export default function SummaryPage() {
  return (
    // Added dark theme provider, remove for normal colors
    <ThemeProvider theme={darkTheme}>
      <LayoutSkeleton
        mainContentComponent={<OverviewCards />}
      />
    </ThemeProvider>
  );
}
