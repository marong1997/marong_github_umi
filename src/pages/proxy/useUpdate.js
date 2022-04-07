import React, { useState, useEffect } from 'react';

const init_value = {
  name: 'arong',
  nature: 'fire',
  ability: '静默',
  hurt: 50,
};

export const proxy_data = new Proxy(init_value, {});

const useUpdate = (use_data) => {
  const [data, update_date] = useState({});

  useEffect(() => {
    update_date({ ...proxy_data });
    console.log('??????????????');
  }, [use_data]);

  return [data, update_date];
};

export default useUpdate;
