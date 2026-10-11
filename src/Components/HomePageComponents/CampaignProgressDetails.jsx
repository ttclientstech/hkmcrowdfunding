import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  VStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../utils";
import CountUp from "react-countup";
import { keyframes } from "@emotion/react";


const borderAnimation = keyframes`
  0% {
    border-color: transparent;
  }
  50% {
//     border-color: #6A1B1A;
    border-color: #D4AF37
  }
  100% {
    border-color: transparent;
  }
`;

const CampaignProgressDetails = ({ currentAmount, goalAmount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (goalAmount > 0) {
      const targetPercentage = Math.min(
        (currentAmount / goalAmount) * 100,
        100
      );
      let start = 0;

      const interval = setInterval(() => {
        if (start >= targetPercentage) {
          setProgress(targetPercentage);
          clearInterval(interval);
        } else {
          start += 1;
          setProgress(start);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [currentAmount, goalAmount]);

//   const bgColor = useColorModeValue("gray.800", "gray.700");
//   const progressColor = IskconBgColor; //useColorModeValue("green.400", "green.300");
//   const progressStrokeColor = useColorModeValue("#e3c44e");
  const trackColor = useColorModeValue("gray.300", "gray.600");
//   const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box
      w={'100%'}
      mx="auto"
      borderRadius="12px"
      px={['1rem', '1.5rem', '2rem']}
      py={['1rem', '1.2rem', '1.5rem']}
      bgColor="#FAF3E0"
      boxShadow="dark-lg"
      marginBottom="15px"
      border="4px solid #D4AF37"
      animation={`${borderAnimation} 3s infinite`}
      textTransform='uppercase'
    >
      <Flex direction={["column", "column", "row"]} align="center" justify="space-between" gap={["1.5rem", "1.5rem", "1rem"]}>
        <VStack align={["center", "center", "flex-start"]} spacing={1}>
          <Flex align="center" gap={2} color={'#3B2F2F'} fontSize={["1.1rem", "1.4rem", "1.6rem"]}>
            <Box fontWeight="semibold">Goal:</Box>
            <Box fontWeight="extrabold">{formatCurrency(goalAmount)}</Box>
          </Flex>

          <HStack alignItems="baseline" color={'#B22222'}>
            <Box fontSize={["1.8rem", "2.2rem", "2.5rem"]} fontWeight="bold">
              ₹<CountUp end={currentAmount} start={currentAmount / 2} useIndianSeparators={true} />
            </Box>
            <Box fontSize={["1rem", "1.2rem", "1.3rem"]} fontWeight="bold">
              Achieved
            </Box>
          </HStack>
        </VStack>

        <Box display="flex" alignItems="center" justifyContent="center" my={["0.5rem", "0.5rem", 0]}>
          <CircularProgress
            value={progress}
            size={["110px", "130px", "140px"]}
            thickness="10px"
            color={'#3B2F2F'}
            trackColor={trackColor}
            capIsRound={true}
          >
            <CircularProgressLabel
              fontSize={["1.1rem", "1.2rem", "1.4rem"]}
              fontWeight="bold"
              color={'#B22222'}
            >
              {progress.toFixed(2)}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>

        <VStack align={["center", "center", "flex-end"]} textAlign={["center", "center", "right"]}>
          <Box fontSize={["1.2rem", "1.6rem", "1.8rem"]} fontWeight="extrabold" color={'#B22222'} lineHeight="1.2">
            Mandir Nirmana Seva
          </Box>
          <Box fontSize={["0.9rem", "1rem", "1.1rem"]} fontWeight="bold" color={'#B22222'} mt={1}>
            Be a Part of This Legacy
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CampaignProgressDetails;