import { Flex, Image, Box, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";

// import { IskconFontColor, IskconBgColor, banner } from "../utils.jsx";

const HeadingBanner = () => {
    // const bgColor = '#54956e';
    // const textColor = useColorModeValue("white", "gray.200");
    const bgColor = '#4B0000';  //'#f4c430'; //'#f4c430';
    const textColor = '#FFFFFF'; //useColorModeValue("#444444", "gray.200")

    return (
        <>
        <Box w="100%" h="6px" bgGradient="linear(to-r, #D4AF37, #FFD700, #D4AF37)" />
        <Flex
            maxW="1200px"
            w="100%"
            justifyContent='space-between'
            align="center"
            bg={bgColor}
            minH={["110px", "130px", "150px"]}
            py={["0.75rem", "1rem"]}
            direction="row"
            px={["10px", "15px", "20px"]}
            boxShadow="lg"
        >
            <Image
                src={logo}
                alt="Left Banner"
                boxSize={["70px", "90px", "120px"]}
                objectFit="contain"
                border="2px solid #D4AF37"
                borderRadius="md"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            />
            <Box
                width={["2px", "3px", "4px"]}
                height={["70px", "90px", "120px"]}
                bg="whiteAlpha.400"
                marginRight={["8px", "12px", "16px"]}
                marginLeft={["8px", "12px", "16px"]}
            />
            <Box textAlign="left" flex="1" >
                <Text fontSize={["2xs", "xs", "sm", "md"]} fontWeight="bold" color={textColor} lineHeight={["1.2rem", "1.4rem", "1.6rem"]}>
                    IF YOU BUILD A TEMPLE OF LORD KRISHNA IN THIS WORLD, KRISHNA WILL BUILD A PALACE FOR YOU IN THE SPIRITUAL WORLD - VAIKUNTHA
                </Text>
            </Box>
        </Flex>
        <Box w="100%" h="6px" bgGradient="linear(to-r, #D4AF37, #FFD700, #D4AF37)" />
        <Box display={"block"} marginBottom='5px' maxW="1200px" w="100%" mt="-1px" mb="8px" textAlign={"end"}>
            <Text fontSize={["xs", "sm", "lg"]} color={textColor} bg={bgColor}>
{/*                 <i>If you build a temple of Krishna, you will be liberated. <span>&nbsp;&nbsp;</span><br/><b>- Srila Prabhupada </b><span>&nbsp;&nbsp;</span></i> */}
            </Text>
        </Box>
       
        </>
    );
};

export default HeadingBanner;
