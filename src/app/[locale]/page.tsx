import { getServerSession } from 'next-auth';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

// Components
import SettingsLanguage from '@/components/SettingsLanguage/SettingsLanguage';
import LoginContent from '../../components/LoginContent/LoginContent';
import Logout from '../../components/Logout/Logout';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import SettingsTheme from '@/components/SettingsTheme/SettingsTheme';

// Styles
import styles from './Home.module.scss';

// Types
import { Language } from '@/types/shared.types';

// UI
import { Button } from '@/ui/Button';
import { Link } from '@/ui/Link';
import { LoadingSpinner } from '@/ui/LoadingSpinner';
import { Text } from '@/ui/Text';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerSession();
  const tCommon = await getTranslations('common');
  const tHome = await getTranslations('home');

  unstable_setRequestLocale(locale);

  return (
    <ProtectedRoute>
      <main className={styles['home']}>
        <Text variant="h5">{tHome('title')}</Text>
        <SettingsLanguage title={tCommon('settings.language.title')} />
        <Text>
          {locale === Language.English
            ? tCommon('settings.language.en')
            : tCommon('settings.language.de')}
        </Text>
        <br />
        <SettingsTheme
          dark={tCommon('settings.theme.dark')}
          light={tCommon('settings.theme.light')}
          system={tCommon('settings.theme.system')}
          title={tCommon('settings.theme.title')}
        />
        <br />
        {!session && <LoginContent />}
        {session?.user && <Logout />}
        <br />
        <LoadingSpinner />
        <br />
        <div className="items-center flex flex-col gap-2 max-w-[500px] mb-4 lg:mb-8">
          <Button>Button Primary</Button>
          <Button variant="main">Button Main</Button>
          <Button variant="secondary">Button Secondary</Button>
          <Button variant="error">Button Error</Button>
          <Button variant="warning">Button Warning</Button>
          <Button variant="success">Button Success</Button>
          <Button variant="ghost">Button Ghost</Button>
          <Button variant="outline">Button Outline</Button>
          <Button disabled variant="main">
            Button Disabled
          </Button>
          <br />
          <Text>Text Primary</Text>
          <Text color="main">Text Main</Text>
          <Text color="secondary">Text Secondary</Text>
          <Text color="muted">Text Muted</Text>
          <Text color="error">Text Error</Text>
          <Text color="warning">Text Warning</Text>
          <Text color="success">Text Success</Text>
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="h5">Heading 5</Text>
          <Text variant="h6">Heading 6</Text>
          <Text variant="subtitle">
            Subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Text>
          <Text size="xs">
            Text xs Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text size="sm">
            Text sm Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text>
            Text md Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text size="lg">
            Text lg Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text size="xl">
            Text xl Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Link href="/">Link Primary</Link>
        </div>
      </main>
    </ProtectedRoute>
  );
}
