import jspreadsheet from './index.js';

import './jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

window.jss = jspreadsheet;

window.instance = jspreadsheet(root, {
    tabs: false,
    toolbar: false,

    worksheets: [{

        minDimensions: [6,6],
        pagination : 1000,
        columns:[
            { type: 'text', title: '通道名称', name: 'name', width: 500, align: 'left' },
            { type: 'text', title: '功能码', name: 'funcCode', width: 80 },
            { type: 'text', title: '寄存器地址', name: 'regAddress', width: 100 },
            { type: 'text', title: '位偏移', name: 'bitOffset', width: 80 },
            { type: 'text', title: '位长度', name: 'bitCount', width: 100 },
            { type: 'text', title: '数据类型', name: 'dataType', width: 100, source: ['int8', 'int16', 'int32', 'float'] },
            { type: 'text', title: '高低位', name: 'hlType', width: 100 },
            { type: 'text', title: '单位', name: 'unit', width: 80 },
            { type: 'text', title: '范围', name: 'range', width: 100 },
            { type: 'text', title: '倍率', name: 'rate', width: 80 },
            // { type: UseBitDataCell(), title: '含义', name: 'meaning', width: 100 },
            // { type: UseBitDataCell(), title: '拆分配置', name: 'bitData', width: 200 }
          ],
          tableWidth: 1024,
          tableHeight: 768,
    }],
})
   
