import {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import WebView from 'react-native-webview';
import Switch from '../Switch';

const RecipeVideo = ({source}: {source: string}) => {
  const WebviewRef = useRef<WebView>(null);
  let firstTime = false;
  let firstUrl = '';
  const [showVideo, setShowVideo] = useState(false);
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="tracking-widest text-neutral-900 text-3xl mt-4 mb-5">
          Recipe Video
        </Text>
        <Switch
          value={showVideo}
          onPress={() => {
            setShowVideo(p => !p);
          }}
        />
      </View>
      {showVideo && (
        <Animated.View entering={FadeInUp.duration(200).springify()}>
          <WebView
            ref={WebviewRef}
            allowsFullscreenVideo
            onLoadEnd={e => {
              if (!firstTime) {
                firstTime = true;
                firstUrl = e.nativeEvent.url;
              }
            }}
            onLoadStart={e => {
              if (firstTime && e.nativeEvent.url !== firstUrl) {
                WebviewRef.current?.stopLoading();
                WebviewRef.current?.goBack();
              }
            }}
            style={{height: 400}}
            source={{uri: source}}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default RecipeVideo;
