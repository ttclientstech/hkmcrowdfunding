import React from "react";
import { Box, Button, HStack, Text, Progress, Flex } from "@chakra-ui/react";
import { formatCurrency, calculatePercentage, IskconFontColor, IskconProgressColor } from "../utils.jsx";
import { FaHeart } from "react-icons/fa6";

const StickyDonateBar = ({ getSingleUser, onDonateClick }) => {
  const targetAmount = getSingleUser?.campaignDetails?.targetAmount || 1000000;
  const raisedAmount = getSingleUser?.raisedFund || 0;
  const percent = Number(calculatePercentage(targetAmount, raisedAmount));
  const campaignName = getSingleUser?.campaignDetails?.campaignName || "Dakshina Dwaraka Dham";

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={100}
      bg="rgba(12, 10, 32, 0.96)"
      backdropFilter="blur(10px)"
      borderTop="2px solid rgba(213, 130, 240, 0.4)"
      boxShadow="0 -8px 24px rgba(0, 0, 0, 0.35)"
      py={["0.6rem", "0.75rem"]}
      px={["1rem", "1.5rem", "2rem"]}
      animation="slideUp 0.3s ease-out"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        gap={["0.75rem", "1.5rem"]}
      >
        {/* Left: Campaign Progress Summary */}
        <Box flex="1" minW={0}>
          <HStack spacing={2} alignItems="center" mb={1} wrap="wrap">
            <Text
              fontWeight="bold"
              color={IskconFontColor}
              fontSize={["sm", "md"]}
              isTruncated
              maxW={["160px", "280px", "400px"]}
            >
              {campaignName}
            </Text>
            <Text
              as="span"
              fontSize={["xs", "sm"]}
              fontWeight="extrabold"
              color={IskconProgressColor}
              bg="rgba(213, 130, 240, 0.15)"
              px={2}
              py={0.5}
              borderRadius="full"
            >
              {percent}% Raised
            </Text>
          </HStack>

          {/* Progress bar and metrics */}
          <HStack spacing={3} alignItems="center">
            <Progress
              value={percent > 100 ? 100 : percent}
              size="xs"
              borderRadius="full"
              flex="1"
              bg="whiteAlpha.300"
              sx={{
                "& > div": {
                  background: `linear-gradient(90deg, #d582f0, #ff8a00)`,
                },
              }}
            />
            <Text
              fontSize={["xs", "sm"]}
              color="whiteAlpha.900"
              whiteSpace="nowrap"
              fontWeight="semibold"
            >
              <Text as="span" color="#ffb03a" fontWeight="bold">
                {formatCurrency(raisedAmount)}
              </Text>{" "}
              / {formatCurrency(targetAmount)}
            </Text>
          </HStack>
        </Box>

        {/* Right: Prominent Donate CTA Button */}
        <Button
          onClick={onDonateClick}
          bg="linear-gradient(135deg, #eb6a26 0%, #ff8a00 100%)"
          color="#ffffff"
          fontWeight="extrabold"
          fontSize={["sm", "md", "lg"]}
          px={["1rem", "1.6rem", "2.2rem"]}
          py={["1rem", "1.2rem", "1.5rem"]}
          h={["44px", "48px", "52px"]}
          borderRadius="full"
          boxShadow="0 4px 15px rgba(235, 106, 38, 0.5)"
          leftIcon={<FaHeart color="#ffffff" />}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(235, 106, 38, 0.7)",
            filter: "brightness(1.05)",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.2s"
          flexShrink={0}
        >
          DONATE NOW
        </Button>
      </Flex>
    </Box>
  );
};

export default StickyDonateBar;
