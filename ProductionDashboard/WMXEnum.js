/* 
2  * Copyright 2016 Esri 
3  * 
4  * Licensed under the Apache License, Version 2.0 (the "License"); 
5  * you may not use this file except in compliance with the License. 
6  * You may obtain a copy of the License at 
7  *   http://www.apache.org/licenses/LICENSE-2.0 
8  
9  * Unless required by applicable law or agreed to in writing, software 
10  * distributed under the License is distributed on an "AS IS" BASIS, 
11  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
12  * See the License for the specific language governing permissions and 
13  * limitations under the License. 
14  */

define([
"dojo/_base/declare"
], function(declare){
  var WMXEnum = declare(null, {});
  WMXEnum.SHORT_DATATYPE        = 0;
  WMXEnum.LONG_DATATYPE         = 1;
  WMXEnum.DOUBLE_DATATYPE       = 3;
  WMXEnum.DATE_DATATYPE         = 5;
  WMXEnum.TEXT_DATATYPE         = 4;
  WMXEnum.OBJECTID_DATATYPE     = 6;
  WMXEnum.UNKNOWN_DATATYPE      = -1;

  WMXEnum.GROUP_BY_DAY          = 'day';
  WMXEnum.GROUP_BY_MONTH        = 'month';
  WMXEnum.GROUP_BY_YEAR         = 'year';

  WMXEnum.CALCULATE_BY_SUM      = 'sum';
  WMXEnum.CALCULATE_BY_COUNT    = 'count';
  WMXEnum.CALCULATE_BY_AVERAGE  = 'average';
  return WMXEnum;
});

