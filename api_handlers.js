/*
    File Name   : api_handlers.js
    Created     : on 23:37 at May 12, 2023
    Description : 

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

const apiUrl = "https://digicre.shibalab.com/event/2023-omiya";

// 来場者数を取得する関数
export async function getVisitorCount(visitorId) {
  const response = await fetch(`${apiUrl}/?visitor=${visitorId}`);
  const data = await response.json();
  return data.visitor_count;
}

// 作品情報を取得する関数
export async function getArtworkInfo(artworkId) {
  const response = await fetch(`${apiUrl}/?artwork=${artworkId}`);
  const data = await response.json();
  return data;
}

    
export async function recordVisitor(artworkId) {
  const response = await fetch(`${apiUrl}/?visitor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ artwork_id: artworkId }),
  });
  const data = await response.json();
  return data.message;
}

