import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ItemsProvider } from "./components/providers/items-provider";

export const App = () => (
    <ThemeProvider>
        <ItemsProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                    <List />
                    <Footer />
                </Layout>
            </Container>
        </ItemsProvider>
    </ThemeProvider>
);
