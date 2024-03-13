import { Link } from "expo-router";
import { Button, Text } from "react-native";

export default function Page () {
    return (
        <>
            <Text>Home page</Text>
            <Link href='/about' asChild>
                <Button title="Naviguer vers about" />
            </Link>
        </>
    )
}