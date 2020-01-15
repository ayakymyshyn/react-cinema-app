import React from 'react';


export const bookTicket = async (url = "", data = []) => {
  console.log(JSON.stringify(data));
  try {
    const res = await fetch(url, {
      method: "PATCH",
      cache: "default",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return res.status === 200;
    //return await res.json();
  } catch (err) {
    console.log(err);
    return err.json({ message: err });
  }
};
