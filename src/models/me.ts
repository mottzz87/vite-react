/*
 * @Author: Vane
 * @Date: 2021-07-09 11:24:54
 * @LastEditTime: 2021-07-09 11:53:24
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\models\me.ts
 */
import { defineModule } from 'concent';

import { queryMe } from '@/service/me';

export interface Me {
  address?: string;
  avatar?: string;
  email?: string;
  name?: string;
  position?: string;
}

const Model = defineModule({
  state: { address: '', avatar: '', email: '', name: '', position: '' } as Me,

  reducer: {
    fetchMe: async () => {
      const response = await queryMe();
      return response.data;
    }
  }
});

export default Model;
