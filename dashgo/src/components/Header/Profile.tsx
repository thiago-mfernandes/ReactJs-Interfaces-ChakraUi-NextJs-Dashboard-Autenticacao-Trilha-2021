import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true} : ProfileProps) {
  return (
    <Flex
      alignItems="center"
    >
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Thiago Fernandes</Text>
            <Text color="gray.300" fontSize="small" >
              falecomobranco@yahoo.com.br
            </Text>
          </Box>
        )        
      }
      <Avatar 
        size="md" 
        name="Thiago Fernandes" 
        src="https://avatars.githubusercontent.com/u/91342038?s=400&u=fbccdae64f00b2338389c0f4a55fda57a85e5ef4&v=4" />
    </Flex>
  );
}