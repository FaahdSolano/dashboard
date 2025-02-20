/*
Copyright 2019-2023 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* eslint-disable formatjs/no-literal-string-in-jsx */

import React from 'react';

import Tabs from '.';
import Tab from '../Tab';

export default {
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  title: 'Tabs'
};

export const Default = () => (
  <Tabs>
    <Tab label="label for tab1">content of tab 1</Tab>
    <Tab label="tab 2">content of tab 2</Tab>
    <Tab label="tab 3 is disabled" disabled>
      content of tab 3
    </Tab>
  </Tabs>
);
