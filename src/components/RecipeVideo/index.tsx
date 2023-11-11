import Switch from '@components/Switch';
import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import Animated, {FadeIn, FadeInUp, Layout} from 'react-native-reanimated';
import WebView from 'react-native-webview';

const RecipeVideo = ({source}: {source: string}) => {
  const WebviewRef = useRef<WebView>(null);
  let firstTime = false;
  let firstUrl = '';
  const [showVideo, setShowVideo] = useState(false);
  return (
    <View>
      <Animated.View
        entering={FadeIn.delay(1000)}
        layout={Layout.springify()}
        className="flex-row justify-between items-center">
        <Text className="tracking-widest text-neutral-900 text-3xl mt-4 mb-5">
          Recipe Video
        </Text>
        <Switch
          value={showVideo}
          onPress={() => {
            setShowVideo(p => !p);
          }}
        />
      </Animated.View>
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
