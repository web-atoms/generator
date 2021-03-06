import Category from "@web-atoms/unit-test/dist/Category";
import Test from "@web-atoms/unit-test/dist/Test";
import TestItem from "@web-atoms/unit-test/dist/TestItem";
import { XamlFile } from "./xaml-file";

@Category("xaml-file")
export class TestCase extends TestItem {

    @Test
    public test(): void {
        const f = new XamlFile("", { imports: {} });

        const text = f.compileContent(`<Grid xmlns="clr-namespace:Xamarin.Forms">
                <Grid.RowDefinitions>
                    <RowDefinition/>
                    <RowDefinition/>
                    <RowDefinition/>
                </Grid.RowDefinitions>

                <Grid.ColumnDefinitions>
                    <ColumnDefinition/>
                    <ColumnDefinition/>
                    <ColumnDefinition/>
                </Grid.ColumnDefinitions>

                <Label
                    Grid.Row="0"
                    Grid.Column="1"
                    Text="\${ \`\${$viewModel.firstName}\` }"
                />

                <ListView ItemsSource="[ $viewModel.items ]">
                    <ListView.ItemTemplate>
                        <DataTemplate>
                            <Label
                                Text="\${$data.label}"
                                />
                        </DataTemplate>
                    </ListView.ItemTemplate>
                </ListView>
            </Grid>`);

        // tslint:disable-next-line:no-console
        console.log(text);
    }

}
