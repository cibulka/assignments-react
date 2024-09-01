import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ItemsProvider } from "./components/providers/items-provider";
import { useItemsContext, useOnItemAddOrEdit } from "./components/providers/items-provider/hooks";
import { useMemo } from "react";

const AppProvided = () => {
    const { state: { edited, items } } = useItemsContext();
    
    const onItemAddOrEdit = useOnItemAddOrEdit(edited?.id || null);

    const [doneItems, todoItems] = useMemo(() => {
        return [
            items.reduce((previous, current) => previous + (current.isDone ? 0 : 1), 0),
            items.reduce((previous, current) => previous + (current.isDone ? 1 : 0), 0),
        ];
    }, [items]);

    return (
        <Container>
            <Layout>
                <Header onItemAdd={onItemAddOrEdit}>To Do app</Header>
                <List />
                <Footer doneItems={doneItems} todoItems={todoItems}  />
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
