import { chakra, keyframes } from "@chakra-ui/react"
import { Keyframes } from "@emotion/react";
import { useState } from "react";
import heart from '/src/image/heart.svg';
import heartActive from '/src/image/heart_active.svg';


const HeartAnimation = () => {
const [isClicked, setIsClicked] = useState(false)

const createAnimationKeyframes = (
  translateX: number,
  translateY: number,
  scale: number,
): Keyframes =>
  keyframes({
    '0%': { opacity: 1 },
    '50%': { opacity: 0.8 },
    '80%': { opacity: 0.2 },
    '100%': {
      opacity: 0.1,
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
    },
  })

const heartBeat = keyframes({
  '50%': { transform: 'scale(1.2)' },
})

  return (
    <chakra.div pos='relative'>
      <chakra.button
        pos='absolute'
        top='30px'
        left='30px'
        p='20px'
        bg='#EAEAEA'
        borderRadius='50%'
        boxShadow='0 2px 4px #4385bb12'
        onClick={() => setIsClicked(!isClicked)}
      >
        <chakra.div pos='relative' w='40px' h='40px'>
          <chakra.img
            src={isClicked ? heartActive : heart}
            alt='いいねボタン'
            animation={isClicked ? `${heartBeat} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="-5px"
            left="10px"
            background="#CC8EF5"
            borderRadius="100"
            w="3px"
            h="3px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(0, -10, 1.6)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="1px"
            left="-6px"
            background="#CC8EF5"
            borderRadius="100"
            w="4px"
            h="4px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(-10, -10, 1.4)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="20px"
            left="-8px"
            background="#91D2FA"
            borderRadius="100"
            w="3px"
            h="3px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(-10, 10, 2.0)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            bottom="10px"
            left="0px"
            background="#FFF450"
            borderRadius="100"
            w="2px"
            h="2px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(-10, 10, 1.2)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            bottom="0px"
            left="0px"
            background="#CC8EF5"
            borderRadius="100"
            w="3px"
            h="3px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(-10, 10, 1.2)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="-6px"
            right="6px"
            background="#8CE8C3"
            borderRadius="100"
            w="4px"
            h="4px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(10, -10, 1.1)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="4px"
            right="-4px"
            background="#FFF450"
            borderRadius="100"
            w="3px"
            h="3px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(10, -10, 2.0)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            top="14px"
            right="-10px"
            background="#91D2FA"
            borderRadius="100"
            w="3px"
            h="3px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(10, 0, 1.5)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            bottom="8px"
            right="0px"
            background="#91D2FA"
            borderRadius="100"
            w="2px"
            h="2px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(10, 10, 2.0)} 0.25s` : ''}
          />

          <chakra.span
            pos="absolute"
            bottom="1px"
            right="8px"
            background="#FFF450"
            borderRadius="100"
            w="2px"
            h="2px"
            opacity="0"
            animation={isClicked ? `${createAnimationKeyframes(10, 10, 2.0)} 0.25s` : ''}
          />
        </chakra.div>
      </chakra.button>
    </chakra.div>
  )
}

export default HeartAnimation
