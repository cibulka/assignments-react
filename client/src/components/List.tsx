import styled from "styled-components";

import { useGetOnItemDelete, useGetOnItemDoneToggle, useGetOnItemLabelEdit, useItemsContext } from "./providers/items-provider/hooks";
import { ListItem } from "./ListItem";
import { useMemo } from "react";

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const List = () => {
    const { state: { items } } = useItemsContext();

    const getOnItemDoneToggle = useGetOnItemDoneToggle();
    const getOnItemDelete = useGetOnItemDelete();
    const getOnItemLabelEdit = useGetOnItemLabelEdit();

    const itemsSorted = useMemo(() => {
        return [...items].sort((a, b) => {
            if (!a.isDone && b.isDone) {
                return -1;
            } else if (a.isDone && !b.isDone) {
                return 1;
            }
            return b.createdAt - a.createdAt;
        });
    }, [items]);

    return (
        <ListStyled>
            {/* TODO: Implement error view */}
            {/* TODO: Implement empty view */}
            {/* TODO: Implement loading view */}
            {itemsSorted.map(item => {
                const onItemDelete = getOnItemDelete(item.id);
                const onItemLabelEdit = getOnItemLabelEdit(item.id);
                const onItemDoneToggle = getOnItemDoneToggle(item.id);
                return (
                    <ListItem 
                        key={item.id} 
                        isDone={item.isDone} 
                        label={item.label} 
                        onItemLabelEdit={onItemLabelEdit}
                        onItemDoneToggle={onItemDoneToggle}
                        onItemDelete={onItemDelete}
                    />
                );
            })}
        </ListStyled>
  );
};
