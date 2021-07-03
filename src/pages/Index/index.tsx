/*
 * @Author: Vane
 * @Date: 2021-07-03 22:42:06
 * @LastEditTime: 2021-07-04 04:13:02
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\pages\Index\index.tsx
 */

import React, { useEffect } from 'react'
import { Button } from 'antd'
import { request } from '@/utils/request'

export default function Index() {
  useEffect(() => {
    request({url: '/index-infos', method: 'GET'}).then(() => {
      
    })
  }, [])
  return <div>
    <Button>Index</Button>
  </div>
}
