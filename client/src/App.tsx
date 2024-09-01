import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ItemsProvider } from "./components/providers/items-provider";
import { useItemsContext, useOnItemAddOrEdit } from "./components/providers/items-provider/hooks";

const AppProvided = () => {
    const { state: { edited } } = useItemsContext();
    const onItemAddOrEdit = useOnItemAddOrEdit(edited?.id || null);

    return (
        <Container>
            <Layout>
                <Header onItemAdd={onItemAddOrEdit}>To Do app</Header>
                <List />
                <Footer />
            </Layout>
        </Container>
    );
}

export const App = () => (
    <ThemeProvider>
        <ItemsProvider>
            <AppProvided />
        </ItemsProvider>
    </ThemeProvider>
);
