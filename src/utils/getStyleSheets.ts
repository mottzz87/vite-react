/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-05 01:39:47
 * @LastEditTime: 2021-07-05 01:41:51
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\utils\getStyleSheets.ts
 */
// 获取阿里字体图标
const getAlicdnIconfont = () => {
  return new Promise((resolve, reject) => {
    const styles: any = document.styleSheets;
    const sheetsList = [];
    const sheetsIconList = [];
    for (let i = 0, len = styles.length; i < len; i++) {
      if (styles[i].href?.indexOf('at.alicdn.com') > -1) {
        sheetsList.push(styles[i]);
      }
    }
    for (let i = 0, len = sheetsList.length; i < len; i++) {
      for (let j = 0, _len = sheetsList[i].cssRules.length; j < _len; j++) {
        if (sheetsList[i].cssRules[j].selectorText?.indexOf('ant-icon') > -1) {
          sheetsIconList.push(
            `${sheetsList[i].cssRules[j].selectorText
              .substring(1, sheetsList[i].cssRules[j].selectorText.length)
              .replace(/\:\:before/gi, '')}`
          );
        }
      }
    }
    if (sheetsIconList.length > 0) resolve(sheetsIconList);
    else reject('未获取到值，请刷新重试');
  });
};

// // 初始化获取 css 样式，获取 element plus 自带图标
// const getElementPlusIconfont = () => {
//   return new Promise((resolve, reject) => {
//     const styles: any = document.styleSheets;
//     const sheetsIconList = [];
//     for (let i = 0, len = styles.length; i < len; i++) {
//       for (let j = 0, _len = styles[i].cssRules.length; j < _len; j++) {
//         if (styles[i].cssRules[j].selectorText?.indexOf('.el-icon-') === 0) {
//           sheetsIconList.push(
//             `${styles[i].cssRules[j].selectorText
//               .substring(1, styles[i].cssRules[j].selectorText.length)
//               .replace(/\:\:before/gi, '')}`
//           );
//         }
//       }
//     }
//     if (sheetsIconList.length > 0) resolve(sheetsIconList);
//     else reject('未获取到值，请刷新重试');
//   });
// };

// 初始化获取 css 样式，这里使用 fontawesome 的图标
const getAwesomeIconfont = () => {
  return new Promise((resolve, reject) => {
    const styles: any = document.styleSheets;
    const sheetsList = [];
    const sheetsIconList = [];
    for (let i = 0, len = styles.length; i < len; i++) {
      if (styles[i].href?.indexOf('bootcdn') > -1) {
        sheetsList.push(styles[i]);
      }
    }
    for (let i = 0, len = sheetsList.length; i < len; i++) {
      for (let j = 0, _len = sheetsList[i].cssRules.length; j < _len; j++) {
        if (
          sheetsList[i].cssRules[j].selectorText?.indexOf('.fa-') === 0 &&
          sheetsList[i].cssRules[j].selectorText?.indexOf(',') === -1
        ) {
          sheetsIconList.push(
            `${sheetsList[i].cssRules[j].selectorText
              .substring(1, sheetsList[i].cssRules[j].selectorText.length)
              .replace(/\:\:before/gi, '')}`
          );
        }
      }
    }
    if (sheetsIconList.length > 0) resolve(sheetsIconList);
    else reject('未获取到值，请刷新重试');
  });
};

// 定义导出方法集合
const initIconfont = {
  // iconfont
  ali: () => {
    return getAlicdnIconfont();
  },
  // // element plus
  // ele: () => {
  //   return getElementPlusIconfont();
  // },
  // fontawesome
  awe: () => {
    return getAwesomeIconfont();
  }
};

// 导出方法
export default initIconfont;
