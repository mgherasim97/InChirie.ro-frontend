// import { Permissions } from 'expo';
import { CameraRoll } from 'react-native-cameraroll';
import * as Permissions from 'expo-permissions'



export default async (index) => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    alert('failed to get library asset, please enable and restart demo');
    return;
  }
  //const { edges } = await CameraRoll.getPhotos({ first: index + 1 });
  //const assets = edges.map(({ node: { image } }) => image.uri);
  //return assets[Math.min(assets.length - 1, index)];
};