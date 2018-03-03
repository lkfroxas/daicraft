import React from 'react';
import SchematicStore from '../stores/SchematicStore.js';
import ItemStore from '../stores/ItemStore.js';
import ShoppingListStore from '../stores/ShoppingListStore.js';
import BuilderSection from './builder/BuilderSection.js';
import ItemList from './item_list/ItemList.js';
import ShoppingList from './ShoppingList.js';
import { Grid, Row, Col } from 'react-bootstrap';

function getCraftState() {
  return {
    schematic: Object.assign({}, SchematicStore.getSchematic()),
    items: Object.assign([], ItemStore.getItems()),
    shoppingList: Object.assign({}, ShoppingListStore.getList())
  };
}

class CraftingApp extends React.Component {
  constructor() {
    super();
    this.state = getCraftState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SchematicStore.addChangeListener(this.onChange);
    ItemStore.addChangeListener(this.onChange);
    ShoppingListStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SchematicStore.removeChangeListener(this.onChange);
    ItemStore.removeChangeListener(this.onChange);
    ShoppingListStore.removeChangeListener(this.onChange);
  }

  render() {
    const items = (this.state.items.length === 0) ? "" : (
      <ItemList
        items={this.state.items}
      />
    );

    const shopList = (this.state.items.length === 0) ? "" : (
      <ShoppingList
        shoppingList={this.state.shoppingList}
      />
    );

    return (
      <main>
        <Grid>
          <Row>
            <Col lg={8}>
              <BuilderSection
                schematic={this.state.schematic}
              />
              {items}
            </Col>
            <Col lg={4}>
              {shopList}
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  onChange() {
    this.setState(getCraftState());
  }
}

export default CraftingApp;
