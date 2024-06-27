import React from 'react';
import { Grid } from '@material-ui/core';
import { Content, HeaderLabel, HeaderTabs, Page, Header } from '@backstage/core-components';
import { Route, Routes } from 'react-router';

const tabs = [
  { label: 'Services', path: '' },
  { label: 'Results', path: 'results' },
  { label: 'Scenarios', path: 'scenarios' },
];

const PluginHeader = () => (
  <Header title="Welcome to demo!" subtitle="Optional subtitle">
    <HeaderLabel label="Owner" value="Team X" />
  </Header>
);

const PageTabs = (props: { selectedIndex: number }) => {
  return (
    <HeaderTabs
      {...props}
      tabs={tabs.map(({ label, path }) => ({
        id: path,
        label,
      }))}
    />
  );
};

export const ServicesPage = () => (
  <Page themeId="tool">
    <PluginHeader />
    <PageTabs selectedIndex={0} />
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <div>Services Page</div>
        </Grid>
      </Grid>
    </Content>
  </Page>
);

export const ScenarioPage = () => (
  <Page themeId="tool">
    <PluginHeader />
    <PageTabs selectedIndex={2} />
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <div>Scenario Page</div>
        </Grid>
      </Grid>
    </Content>
  </Page>
);

export const ResultsPage = () => (
  <Page themeId="tool">
    <PluginHeader />
    <PageTabs selectedIndex={1} />
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <div>Results Page</div>
        </Grid>
      </Grid>
    </Content>
  </Page>
);

export const ExampleComponent = () => (
  <Routes>
    <Route path="/" element={<ServicesPage />} />
    <Route path="/scenarios" element={<ScenarioPage />} />
    <Route path="/results" element={<ResultsPage />} />
  </Routes>
);
