import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Inspector from 'redux-devtools-inspector'
import ChartMonitor from 'redux-devtools-chart-monitor'
import Dispatcher from 'redux-devtools-dispatch'

const DevTools = (
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-j"
    changeMonitorKey="ctrl-m"
    defaultIsVisible
    defaultPosition="bottom"
  >
    <Inspector/>
    <ChartMonitor/>
    <LogMonitor theme="tomorrow"/>
    <Dispatcher/>
    <SliderMonitor/>
  </DockMonitor>
)

export default createDevTools(DevTools)
