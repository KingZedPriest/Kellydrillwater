import { Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";

type quoteProps = {
    state: string;
    email: string;
    address: string;
    description: string;
}

export default function LoginAuthenticationTemplate({ state, email, address, description }: quoteProps) {
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container style={container}>
                    <Section style={coverSection}>
                        <Section style={imageSection}>
                            <Img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1732177542/mainLogo_evs04n.png" alt="Kelly Drill Logo" />
                        </Section>
                        <Section style={upperSection}>
                            <Heading style={h1}>Quote Request</Heading>
                            <Text style={mainText}>
                                <p>Client&apos;s Email: {email}</p>
                                <p>Client&apos;s Address: {address}</p>
                                <p>Client&apos;s State: {state.toUpperCase()}</p>
                                <p>Client&apos;s Work Description: {description}</p>
                            </Text>
                        </Section>
                        <Hr />
                    </Section>
                    <Text style={footerText}>
                        This message was produced and distributed by Kelly drill water services.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#fff",
    color: "#212121",
};

const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
};

const h1 = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
};

const text = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};

const imageSection = {
    backgroundColor: "#252f3d",
    textAlign: "center" as const,
    padding: "20px 0",
};

const image = {
    display: "block",
    height: "40px",
    margin: "0 auto",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };
