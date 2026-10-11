import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const PhotoWithDescription = ({ imageError, avatar, getSingleUser, handleImageError }) => {
    return (
        <Box w={["100%", "100%", "50%"]} mx={"auto"}>
            <Box
                w="100%"
                borderRadius="12px"
                overflow="hidden"
                boxShadow="md"
                bg="white"
            >
                <Text
                  as="h2"
                  fontSize={["lg", "xl", "2xl", "2xl"]}
                  fontWeight="bold"
                  textAlign="center"
                  py="0.75rem"
                  px="1rem"
                  color="#2E2E2E"
                  fontFamily="'Merriweather', serif"
                  borderBottom="1px solid #f0f0f0"
                >
                  Sri {getSingleUser?.campaignDetails?.campaignName}
                </Text>
                <Box
                  w="100%"
                  h={["280px", "360px", "380px", "450px"]}
                  overflow="hidden"
                >
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={imageError ? avatar : getSingleUser?.campaignDetails?.imgurl}
                        onError={handleImageError}
                    />
                </Box>
            </Box>
            <Box
            textAlign="justify"
                bgColor="#EDEAEA"
                mt="1rem"
                p="1rem"
                fontSize="1.1rem"
                fontFamily="sans-serif"
                color="#777777"
            >
                As a devoted well-wisher, I am leading this sacred campaign to support 
                the creation of a magnificent Dakshina Dwaraka Dham - The cultural complex to preserve and
                promote Indian heritage in Chennai, Tamil Nadu.
            </Box>
        </Box>
    );
};

export default PhotoWithDescription;