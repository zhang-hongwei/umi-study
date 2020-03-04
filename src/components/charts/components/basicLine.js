import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import { Spin } from 'antd';
import { geomConfig } from './config';

const data = [
  {
    x: '一月',
    y: 7,
    city: 'tokyo',
  },
  {
    x: '二月',
    y: 6.9,
    city: 'tokyo',
  },
  {
    x: '三月',
    y: 9.5,
    city: 'tokyo',
  },
  {
    x: '四月',
    y: 14.5,
    city: 'tokyo',
  },
  {
    x: '五月',
    y: 18.2,
    city: 'tokyo',
  },
  {
    x: '六月',
    y: 21.5,
    city: 'tokyo',
  },
  {
    x: '七月',
    y: 25.2,
    city: 'tokyo',
  },
  {
    x: '八月',
    y: 26.5,
    city: 'tokyo',
  },
  {
    x: '九月',
    y: 23.3,
    city: 'tokyo',
  },
  {
    x: '十月',
    y: 18.3,
    city: 'tokyo',
  },
  {
    x: '十一月',
    y: 13.9,
    city: 'tokyo',
  },
];
const BasicLine = ({ loading = false, ...rest }) => {
  return (
    <Spin spinning={loading}>
      <Chart data={data} forceFit>
        <Axis name="x" />
        <Axis name="y" />
        <Tooltip />
        <Geom position="x*y" {...geomConfig} />
      </Chart>
    </Spin>
  );
};

export default BasicLine;
