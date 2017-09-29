<div ng-controller="GridCtrl">
    <table>
        <thead>
            <tr>
				<th ng-repeat="column in ctrl.options.columns">
                    <span>{{column.label}}</span>
                </th>
			</tr>
        </thead>
        <tbody>
            <tr ng-repeat="row in data">
                <td ng-repeat="column in ctrl.options.columns">
                    <span>{{getCellValue(row, column)}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>