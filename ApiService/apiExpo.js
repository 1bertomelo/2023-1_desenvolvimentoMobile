import axios from 'axios';

const sendPushNotification = async (token, title, message) => {
  const apiUrl = 'https://exp.host/--/api/v2/push/send';

  const messageData = {
    to: token,
    title: title,
    body: message,
    sound: 'default',
    priority: 'high',
    channelId: 'default',
  };

  try {
    const response = await axios.post(apiUrl, messageData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Push notification sent successfully:', response.data);
  } catch (error) {
    console.log('Error sending push notification:', error);
  }
};
