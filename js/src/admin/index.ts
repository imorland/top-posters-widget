import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';
import TopPostersSettingsPage from './components/TopPostersSettingsPage';

app.initializers.add('ianm/top-posters-widget', () => {
  app.extensionData.for('ianm-top-posters-widget').registerPage(TopPostersSettingsPage);
  registerWidget(app);
});
