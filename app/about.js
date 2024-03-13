import { Link } from "expo-router";
import { Button, Text } from "react-native";

export default function About() {
    return (
        <>
            <Text>A propos</Text>
            <Link href='/' asChild>
                <Button title="home" />
            </Link>
        </>
    )
}