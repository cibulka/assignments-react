import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ItemsProvider } from "./components/providers/items-provider";
import { useOnItemAdd } from "./hooks/server";

export const App = () => {
    const onItemAdd = useOnItemAdd();

    return (
        <ThemeProvider>
            <ItemsProvider>
                <Container>
                    <Layout>
                        <Header onItemAdd={onItemAdd}>To Do app</Header>
                        <List />
                        <Footer />
                    </Layout>
                </Container>
            </ItemsProvider>
        </ThemeProvider>
    );
}
